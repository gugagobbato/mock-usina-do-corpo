export class BaseDataOutput {
  constructor(
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    creatorUserId?: string,
    lastEditorUserId?: string) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.creatorUserId = creatorUserId;
    this.lastEditorUserId = lastEditorUserId;
  }

  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  creatorUserId?: string;
  lastEditorUserId?: string;
}