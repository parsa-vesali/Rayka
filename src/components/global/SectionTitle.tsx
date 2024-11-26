import React from 'react'
import SectionBadge from '../ui/section-badge'

interface titleProps {
    title: string,
    description: string,
    badgeTitle: string
}

const SectionTitle = ({ title, description, badgeTitle }: titleProps) => {
    return (
        <div className="max-w-md md:mx-auto text-start md:text-center">
            <SectionBadge title={badgeTitle} />
            <h2 className=" text-3xl lg:text-4xl font-Dana-Medium mt-6">
                {title}
            </h2>
            <p className="text-muted-foreground mt-6">
                {description}
            </p>
        </div>
    )
}

export default SectionTitle