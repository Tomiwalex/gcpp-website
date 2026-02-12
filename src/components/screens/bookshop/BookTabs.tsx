'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BookTabsProps {
    currentTab: string;
    onTabChange: (value: string) => void;
}

export default function BookTabs({ currentTab, onTabChange }: BookTabsProps) {
    return (
        <Tabs value={currentTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="bg-transparent p-0 gap-6">
                <TabsTrigger
                    value="just-released"
                    className="rounded-none border-b-2 border-transparent bg-transparent px-0 py-2 text-base font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground"
                >
                    Just Released
                </TabsTrigger>
                <TabsTrigger
                    value="best-sellers"
                    className="rounded-none border-b-2 border-transparent bg-transparent px-0 py-2 text-base font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground"
                >
                    Best Sellers
                </TabsTrigger>
                <TabsTrigger
                    value="coming-soon"
                    className="rounded-none border-b-2 border-transparent bg-transparent px-0 py-2 text-base font-medium text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground"
                >
                    Coming Soon
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
