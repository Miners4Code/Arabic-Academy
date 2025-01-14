import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message: string|undefined;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className='bg-destructive/15 p-3 rounded-md 
                        text-destructive flex gap-x-2 items-center text-sm'>
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}