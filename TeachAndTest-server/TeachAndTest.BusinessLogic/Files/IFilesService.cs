﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeachAndTest.Models.Entities;

namespace TeachAndTest.BusinessLogic.Files
{
    public interface  IFilesService
    {
        public Task<List<FileDetails>> UploadAsync(IList<IFormFile> files);
        public Task<PhysicalFileResult> DownloadAsync(Guid id);
    }
}