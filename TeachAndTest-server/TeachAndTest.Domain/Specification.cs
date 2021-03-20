﻿using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace TeachAndTest.Domain
{
    public class Specification<T>
     where T : class
    {
        public List<Expression<Func<T, bool>>> Conditions { get; set; }
            = new List<Expression<Func<T, bool>>>();
        public Func<IQueryable<T>, IIncludableQueryable<T, object>> Includes { get; set; }
        public List<string> IncludeStrings { get; }
            = new List<string>();
        public Func<IQueryable<T>, IOrderedQueryable<T>> OrderBy { get; set; }
        public int? Skip { get; set; }
        public int? Take { get; set; }
    }
}