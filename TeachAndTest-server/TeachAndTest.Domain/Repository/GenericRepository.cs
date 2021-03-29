using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace TeachAndTest.Domain
{
    public sealed class GenericRepository<TEntity>
       : IGenericRepository<TEntity> where TEntity : class
    {
        private readonly DbContext context;
        private readonly DbSet<TEntity> entities;
        public GenericRepository(
            CustomDbContext context
            )
        {
            this.context = context;
            this.entities = context.Set<TEntity>();
        }
        public async Task<TEntity> CreateAsync(TEntity item)
        {
            item = entities.Add(item).Entity;
            await context.SaveChangesAsync();
            return item;
        }
        public async Task<TEntity> GetByIdAsync(object id)
        {
            var entity = await entities.FindAsync(id);
            return entity;
        }

        public IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> predicate
            )
        {
            return entities.AsNoTracking()
                           .Where(predicate)
                           .ToList();
        }
        public async Task<IEnumerable<TEntity>> GetAsync()
        {
            return await entities.AsNoTracking()
                                 .ToListAsync();
        }
        public async Task<IEnumerable<TEntity>> GetAsync(
            Expression<Func<TEntity, bool>> predicate
            )
        {
            return await entities.AsNoTracking()
                                 .Where(predicate)
                                 .ToListAsync();
        }
        public async Task<IEnumerable<TEntity>> GetAsync(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null
            )
        {
            IQueryable<TEntity> query = entities;
            if (filter != null)
            {
                query = query.Where(filter);
            }
            if (orderBy != null)
            {
                return await orderBy(query).ToListAsync();
            }
            else
            {
                return await query.ToListAsync();
            }
        }
        public async Task<IEnumerable<TEntity>> GetAsync(
            Specification<TEntity> specification
            )
        {
            IQueryable<TEntity> query = entities.AsNoTracking();
            if (specification != null)
            {
                query = query.GetSpecifiedQuery<TEntity>(specification);
            }
            return await query.ToListAsync();
        }
        public async Task<IEnumerable<TEntity>> GetWithIncludeAsync(
            params Expression<Func<TEntity, object>>[] includeProperties
            )
        {
            IQueryable<TEntity> query = entities.AsNoTracking();
            return await Include(query, includeProperties).ToListAsync();
        }
        public async Task<IEnumerable<TEntity>> GetWithIncludeAsync(
            Expression<Func<TEntity, bool>> predicate,
            params Expression<Func<TEntity, object>>[] includeProperties
            )
        {
            IQueryable<TEntity> query = entities.AsNoTracking();
            query = Include(query.Where(predicate), includeProperties);
            return await query.ToListAsync();
        }
        public async Task<TEntity> RemoveAsync(object id)
        {
            TEntity entityToRemove = entities.Find(id);
            return await RemoveAsync(entityToRemove);
        }
        public async Task<TEntity> RemoveAsync(TEntity item)
        {
            context.Entry(item).State = EntityState.Deleted;
            await context.SaveChangesAsync();
            return item;
        }
        public async Task<TEntity> UpdateAsync(TEntity item)
        {
            context.Entry(item).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return item;
        }
        private IQueryable<TEntity> Include(
            IQueryable<TEntity> query,
            params Expression<Func<TEntity, object>>[] includeProperties
            )
        {
            return includeProperties
                .Aggregate(query, (current, includeProperty) => current.Include(includeProperty));
        }
    }
}
