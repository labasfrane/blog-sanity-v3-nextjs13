import { defineType, defineField } from "sanity";

export default defineType ({
    title: 'Dokumenti ',
    name: 'files',
    type: 'document',
    fields: [
        defineField({
            name: 'fileName',
            title: 'File Name',
            type: 'string',
        }),
        defineField({
            name: 'upload',
            title: 'Upload File',
            type: 'file'
        })
    ]
})