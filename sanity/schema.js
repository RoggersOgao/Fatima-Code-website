import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import { hero } from './schemas/hero'
import { aboutUs } from './schemas/aboutUs'
import { courses } from './schemas/courses'
import { video } from './schemas/video'

export const schema = {
  types: [post, author, category, blockContent, hero, aboutUs, courses, video ],
}
