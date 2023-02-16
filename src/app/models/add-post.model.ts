export interface AddPostRequest {
    title: string | undefined;
    content: string | undefined;
    summary: string | undefined;
    urlHandler: string | undefined;
    author: string | undefined;
    visible: boolean | undefined;
    publishDate: string | undefined;
    updateDate: string | undefined;
    featuredImageUrl: string | undefined;
}