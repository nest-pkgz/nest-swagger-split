# Nest Swagger Split
### Split swagger documentation into multiple files.


Installation
------------
### NPM
```shell
npm install @nest-pkgz/nest-swagger-split --save
```

Quick Start
------------
```typescript
    // main.ts
    const document = SwaggerModule.createDocument(app, config);
    const {withoutTagInput,withTagSplit} = splitSwaggerDocument(document);
    
    // app.controller.ts
    @Get()
    @ApiInternal()
    getHello(): string {
        return this.appService.getHello();
    }
```

Contribution
------------
Want to help improve this package? We take [pull requests](https://github.com/nest-pkgz/nest-swagger-split/pulls).

Status
------------
The project is under active development.

License
------------
nest-swagger-split is [MIT licensed](LICENSE).
