/**
 * Thường các models sẽ tạo từ đầu, ít thay đổi trong quá trình làm, phụ thuộc vào định nghĩa đối tượng
 */
export class Todo {
  id: number; // timestamp
  content: string;
  isCompleted: boolean;

  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
    this.isCompleted = false; // những todo-item mới mặc định isCompleted = false
  }
}
