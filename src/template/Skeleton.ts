export const SkeletonHome = (): string => {
    return `
    <div class="Skeleton-grid">
        ${Array(8).fill(0).map(() => `
            <div class="Skeleton-card">
                <div class="Skeleton-img"></div>
                <div class="Skeleton-title"></div>
            </div>
        `).join('')}
    </div>
    `;
};

export const SkeletonDetail = (): string => {
    return `
    <div class="Characters-inner">
        <div class="Character-card Skeleton-card">
            <div class="Skeleton-img" style="height: 250px; max-width: 250px; margin: 0 auto 1.5rem auto; border-radius: 16px;"></div>
            <div class="Skeleton-title" style="width: 60%; margin: 0 auto; height: 28px;"></div>
        </div>
        <div class="Character-card Skeleton-card">
            <div class="Skeleton-line"></div>
            <div class="Skeleton-line"></div>
            <div class="Skeleton-line"></div>
            <div class="Skeleton-line"></div>
            <div class="Skeleton-line"></div>
            <div class="Skeleton-line"></div>
        </div>
    </div>
    `;
};
