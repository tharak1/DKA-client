interface PerformanceModel{
    type:string;
    value?:string;
}

interface CourseModel{
    id?:string;
    category?:string;
    courseName?:string;
    description?:string;
    online?:boolean;
    offline?:boolean;
    sessions?:string[];
    price?:string;
    image?:string;
    showActions?:boolean;
    coursePerformance?:string[];
    ageLimit:string
}

interface MyCourseModal{
    courseId: string;
    courseName:string;
    boughtDate:string;
    paymentId:string;
    status?:string;
    courseType: "offline" | "online";
    courseSession: string;
    branch: string;
    endDate:string;
}

interface CharityUploadModel{
    description: string;
    date: string;
    image: string;
    id?: string;
}

interface AchievementsUploadModel{
    description: string;
    date: string;
    image: string;
    id?: string;
}

export type {CourseModel,PerformanceModel,MyCourseModal,CharityUploadModel,AchievementsUploadModel};