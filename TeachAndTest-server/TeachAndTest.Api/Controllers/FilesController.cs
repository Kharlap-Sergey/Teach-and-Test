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

        #region get
        [HttpGet("{guidId}")]
        public async Task<IActionResult> Download(Guid guidId)
        {
            var result = await this.filesService.DownloadAsync(guidId);

            PhysicalFileResult file = new PhysicalFileResult(
                result.Path,
                "text/plain"
                );

            return file;
        }

        [HttpGet("{guidId}")]
        public async Task<IActionResult> DownloadImage(
            Guid guidId,
            [FromQuery] string contentType
            )
        {
            //var guidId = new Guid(id);
            var result = await this.filesService.DownloadAsync(guidId);

            PhysicalFileResult file = new PhysicalFileResult(
                result.Path,
                contentType ?? this.GetImageType(result.Type)
                );

            return file;
        }
        #endregion
        #region post
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<List<FileDetails>>> Upload(
            IFormCollection formFiles
            )
        {
            var details = await this.filesService
                .UploadAsync(
                formFiles.Files.ToList(),
                this.GetCommitterId()
                );
            return details;
        }
        #endregion
        private string GetImageType(string fileFormat = "")
        {
            var contentType = "image/png";

            switch (fileFormat)
            {
                case ".png":
                    contentType = "image/png";
                    break;
                case ".svg":
                    contentType = "image/svg+xml";
                    break;
            }

            return contentType;
        }
    }
}
