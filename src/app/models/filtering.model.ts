/**
 * Vì sao dùng interface:
 * - Những đối tượng được khởi tạo nhiều lần, ví dụ đối tượng A, B, C. Khi khởi tạo cần gán gía trị mặc định cho chúng --> Dùng contructor
 * => Do đó todo-item khai báo class
 * - Những button ít thay đổi, dựa trên một khung chuẩn => Khi khai báo trên app, khai dạng mảng 3 button cố định
 * => Do đó FilterButton dùng interface
 */

export interface FilterButton {
  type: Filter;
  label: string;
  isActive: boolean;
}

export enum Filter {
  All,
  Active,
  Completed,
}
