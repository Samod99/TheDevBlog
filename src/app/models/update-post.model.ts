export interface UpdatePostRequest {
    title: string | undefined;
    content: string | undefined;
    summary: string | undefined;
    urlHandler: string | undefined;
    author: string | undefined;
    visible: boolean | undefined;
    publishDate: Date | undefined;
    updateDate: Date | undefined;
    featuredImageUrl: string | undefined;
}