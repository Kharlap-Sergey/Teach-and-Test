using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeachAndTest.Models;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Files
{
    public interface  IFilesService
    {
        public Task<FileDetails> GetFileDetailsAsync(
            Guid fileId
            );
        public Task<FileDetails> GetFileDetailsAsync(
           Guid fileId,
           int? commiterId
           );
        public Task<List<FileDetails>> UploadAsync(
            IList<IFormFile> files, 
            int committerId
            );
        public Task<FileResponse> DownloadAsync(Guid id);
    }
}
