interface Order {
    orderId?:string;
    paymentId: string; 
    studentId: string; 
    studentName: string;
    courseId: string; 
    courseName: string;
    courseImageUrl:string;
    courseAmount: number; 
    courseType: "offline" | "online"; 
    courseSession: string;
    branch: string;
    parentName: string;
    parentPhoneNo: string; 
    email: string;
    date: string;
    endDate:string;

}

export type {Order};