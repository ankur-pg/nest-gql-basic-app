import { Query, Resolver } from '@nestjs/graphql'
import { Post } from './post.entity'

@Resolver(of => Post)
export class PostResolver {
  @Query(returns => [Post], { name: 'getAllPosts' })
  findAll() {
    return [
      { id: '1', title: 'First post', content: 'Content of the first post' },
    ]
  }
}
