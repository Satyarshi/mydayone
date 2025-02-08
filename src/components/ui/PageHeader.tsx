import Head from 'next/head';
import React from 'react';

interface PageHeaderProps {
    title: string;
    description?: string;
    keywords?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, keywords }) => {
    return (
        <Head>
            <title>MyDayOne | {title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="icon" href="/mydayone.png" />
        </Head>
    );
};

export default PageHeader;