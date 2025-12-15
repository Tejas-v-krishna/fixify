import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <div className="space-y-1">
                {label && <label className="text-sm font-medium text-charcoal/70">{label}</label>}
                <textarea
                    ref={ref}
                    className={cn(
                        "w-full min-h-[100px] px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50 placeholder:text-gray-400 resize-y",
                        className
                    )}
                    {...props}
                />
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export { Textarea };
