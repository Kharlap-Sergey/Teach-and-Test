using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace TeachAndTest.Domain
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        public Task<TEntity> CreateAsync(TEntity item);
        public Task<TEntity> GetByIdAsync(object id);
        public IEnumerable<TEntity> Get(Expression<Func<TEntity, bool>> predicate);
        public Task<IEnumerable<TEntity>> GetAsync();
        public Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> predicate);
        public Task<IEnumerable<TEntity>> GetAsync(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
            );
        public Task<IEnumerable<TEntity>> GetAsync(Specification<TEntity> specification);
        public Task<IEnumerable<TEntity>> GetWithIncludeAsync(
            params Expression<Func<TEntity, object>>[] includeProperties
            );
        public Task<IEnumerable<TEntity>> GetWithIncludeAsync(
            Expression<Func<TEntity, bool>> predicate,
            params Expression<Func<TEntity, object>>[] includeProperties
            );
        public Task<TEntity> RemoveAsync(object id);
        public Task<TEntity> RemoveAsync(TEntity item);
        public Task<TEntity> UpdateAsync(TEntity item);
    }
}
