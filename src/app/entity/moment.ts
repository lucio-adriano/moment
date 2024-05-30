export interface Moment {
    id?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    created_at?: string | null | undefined;
    updated_at?: string | null | undefined;
    comments?: [{ text: string | null | undefined, username: string | null | undefined }];
}