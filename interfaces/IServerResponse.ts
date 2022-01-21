export interface IServerResponse<T> {
  sent: Date,
  data: T,
  error?: string
}