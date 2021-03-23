using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeachAndTest.Api.Common.Controllers;
using TeachAndTest.BusinessLogic.Files;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.Api.Controllers
{
    public class FilesController : ApiControllerBase
    {
        private readonly IFilesService filesService;

        public FilesController(IFilesService filesService)
        {
            this.filesService = filesService;
        }

        [HttpPost]
        //[Authorize]
        public async Task<ActionResult<List<FileDetails>>> Upload(IFormCollection formFiles)
        {
            var details = await this.filesService.UploadAsync(formFiles.Files.ToList());
            return details;
            return null;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Download(string id)
        {
            var guidId = new Guid(id);

            PhysicalFileResult file = new PhysicalFileResult(
                await this.filesService.DownloadAsync(guidId),
                "image/png"
                );
              
            return file;
        }
    }
}
