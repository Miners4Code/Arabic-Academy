import * as z from "zod";

export const LoginSchema = z.object({
  name: z
    .string()
    .min(1, { message: " اسم المستخدم او الايميل لا يمكن ان يكون فارغاً" }),
  password: z.string().min(1, { message: " يرجى ادخال كلمه المرور" }),
});

export const SignupSchema = z.object({
  email: z.string().email({ message: "عنوان البريد غير صالح" }),
  password: z
    .string()
    .min(6, { message: "يجب ان تكون كلمه المرور اكثر من6 احرف" })
    .regex(/[A-Z]/, {
      message: "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل",
    })
    .regex(/[0-9]/, {
      message: "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل",
    })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, {
      message: "يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل",
    }),
  confirmPassword: z.string().min(1, { message: "يرجى تأكيد كلمة المرور" }),
});

export const CreateProfileSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "الرجاء إدخال اسمك الأول" }),
  secondname: z
    .string()
    .min(1, { message: "الرجاء إدخال اسم العائلة" })
    .regex(/^[a-zA-Zا-ي\s]+$/, { message: "لا يمكن أن يحتوي اسم العائلة على أرقام أو أحرف خاصة" }),
  username: z
    .string()
    .min(1, { message: "الرجاء إدخال اسمك المستخدم" }),
  country: z
    .string()
    .min(1, { message: "يرجى اختيار بلد إقامتك" }),
  privacyPolicy: z
    .boolean()
    .refine((val) => val === true, { message: "يرجى تأكيد موافقتك على سياسة الخصوصية الخاصة بنا" }),
});