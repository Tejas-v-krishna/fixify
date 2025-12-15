import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { UploadCloud } from 'lucide-react';

export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
    ({ className, label, ...props }, ref) => {
        return (
            <div className="space-y-1">
                {label && <label className="text-sm font-medium text-charcoal/70">{label}</label>}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 transition-colors hover:border-primary/50 hover:bg-primary/5 cursor-pointer text-center group">
                    <input
                        type="file"
                        className="hidden"
                        ref={ref}
                        {...props}
                    />
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                            <UploadCloud size={20} />
                        </div>
                        <div className="text-sm text-gray-500">
                            <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                        </div>
                        <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </div>
                </div>
            </div>
        );
    }
);

FileUpload.displayName = 'FileUpload';

export { FileUpload };
