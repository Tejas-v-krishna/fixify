'use client';

import { AnimatePresence, motion, Transition } from 'framer-motion';
import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useState,
    useId,
} from 'react';
import { cn } from '@/lib/utils';

type AnimatedBackgroundProps = {
    children:
    | ReactElement<{ 'data-id': string; children?: any }>[]
    | ReactElement<{ 'data-id': string; children?: any }>;
    defaultValue?: string;
    onValueChange?: (newActiveId: string | null) => void;
    className?: string;
    transition?: Transition;
    enableHover?: boolean;
};

export function AnimatedBackground({
    children,
    defaultValue,
    onValueChange,
    className,
    transition,
    enableHover = false,
    as: Component = 'div',
    containerClassName,
}: AnimatedBackgroundProps & {
    as?: any;
    containerClassName?: string;
}) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const uniqueId = useId();

    const handleSetActiveId = (id: string | null) => {
        setActiveId(id);

        if (onValueChange) {
            onValueChange(id);
        }
    };

    useEffect(() => {
        if (defaultValue !== undefined) {
            setActiveId(defaultValue);
        }
    }, [defaultValue]);

    return (
        <Component className={cn('group flex', containerClassName)}>
            {Children.map(children, (child: any, index) => {
                const id = child.props['data-id'];
                const interactionProps = enableHover
                    ? {
                        onMouseEnter: () => handleSetActiveId(id),
                        onMouseLeave: () => handleSetActiveId(null),
                    }
                    : {
                        onClick: () => handleSetActiveId(id),
                    };

                return cloneElement(
                    child,
                    {
                        key: index,
                        className: cn('relative inline-flex', child.props.className),
                        'aria-selected': activeId === id,
                        'data-checked': activeId === id ? 'true' : 'false',
                        ...interactionProps,
                    },
                    <>
                        <AnimatePresence initial={false}>
                            {activeId === id && (
                                <motion.div
                                    layoutId={`background-${uniqueId}`}
                                    className={cn('absolute inset-0 z-0 bg-blue-100', className)}
                                    transition={
                                        transition ?? {
                                            type: 'spring',
                                            bounce: 0.2,
                                            duration: 0.3,
                                        }
                                    }
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}
                        </AnimatePresence>
                        <div className='z-10 w-full'>{child.props.children}</div>
                    </>
                );
            })}
        </Component>
    );
}
