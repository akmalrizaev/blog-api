import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  public findAll(userId: string) {
    // Users Service
    // Find a User

    return [
      {
        title: 'Test Title',
        content: 'Test Content',
      },
      {
        title: 'Test Title 2',
        content: 'Test Content 2',
      },
    ];
  }
}
