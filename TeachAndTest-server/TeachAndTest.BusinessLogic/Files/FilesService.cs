using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using TeachAndTest.Domain;
using TeachAndTest.Models;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Files
{
    [ServiceImplementation(typeof(IFilesService))]
    public class FilesService : IFilesService
    {
        private readonly IHostingEnvironment hostingEnvironment;
        private readonly IGenericRepository<FileDetails> filesRepository;

        public FilesService(
            IHostingEnvironment hostingEnvironment,
            IGenericRepository<FileDetails> filesRepository
            )
        {
            this.hostingEnvironment = hostingEnvironment;
            this.filesRepository = filesRepository;
        }
        public async Task<FileResponse> DownloadAsync(Guid id)
        {
            FileDetails fileDetails = await this.filesRepository.GetByIdAsync(id);
            if (fileDetails != null)
            {
                System.Net.Mime.ContentDisposition cd = new System.Net.Mime.ContentDisposition
                {
                    FileName = fileDetails.DocumentName,
                    Inline = false
                };
                //Response.Headers.Add("Content-Disposition", cd.ToString());

                //get physical path
                var path = hostingEnvironment.ContentRootPath;
                var fileReadPath = Path.Combine(
                    path, 
                    "wwwroot", 
                    fileDetails.Id.ToString() + fileDetails.DocType);

                using (var fileStream = new FileStream(fileReadPath, FileMode.Open))
                {
                    return new FileResponse
                    {
                        Path = fileReadPath,
                        Type = fileDetails.DocType
                    };
                }

                throw new Exception();
            }
            else
            {
                throw new Exception("File note founded");
            }
        }

        public async Task<List<FileDetails>> UploadAsync(IList<IFormFile> files)
        {
            var filesDetails = new List<FileDetails>();

            foreach (var file in files)
            {
                var filedetails = await SaveFile(file);
                filesDetails.Add(filedetails);
            }
            return filesDetails;
        }

        private async Task<FileDetails> SaveFile(IFormFile file)
        {
            var fileDetails = new FileDetails();
            var fileType = Path.GetExtension(file.FileName);
            var filePath = hostingEnvironment.ContentRootPath;
            var docName = Path.GetFileName(file.FileName);
            if (file != null && file.Length > 0)
            {
                fileDetails.Id = Guid.NewGuid();
                fileDetails.DocumentName = docName;
                fileDetails.DocType = fileType;
                fileDetails.DocUrl = Path.Combine(filePath, "wwwroot", fileDetails.Id.ToString() + fileDetails.DocType);
                using (var stream = new FileStream(fileDetails.DocUrl, FileMode.OpenOrCreate))
                {
                    await file.CopyToAsync(stream);
                }

                await this.filesRepository.CreateAsync(fileDetails);

                return fileDetails;
            }
            else
            {
                throw new Exception();
            }
        }
    }
}
