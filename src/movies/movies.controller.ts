import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param('id') movieId : string) {
        return 'This will return one movies, the id : ${movieId}';
    }

    @Post()
    create() {
        return 'this will create movies';
    }

    @Delete("/:id")
    remove(@Param('id') modieId:String) {
        return "this will delete a movie with the id : ${movieId}";
    }
}
