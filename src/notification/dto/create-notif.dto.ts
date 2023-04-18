interface CreateNotificationdto {
    offerId:string;
    senderId: string;
    recipientId: string;
    content: string;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}
