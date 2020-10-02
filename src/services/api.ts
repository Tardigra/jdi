export type InboxItem = {
  description: string
}
export const saveInboxItem = async (item: InboxItem) => {
  console.log(item)
}
