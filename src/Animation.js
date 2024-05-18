export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, },
        when: 'beforeChildren'
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: { duration: 1, }
    }
};

export const titleAnim = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: { duration: 1.1, ease: "easeOut" }
    }
};

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: "easeOut", duration: 1.5 },
    },
};

export const imgAnimation = {
    hidden: { scale: 1.2, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.65, ease: "easeOut" },
    },
};

export const lineAnimation = {
    hidden: { width: "0%" },
    show: {
        width: "100%",
        transition: { duration: 1, ease: "easeOut" },
    },
};

export const sliderAnimation = {
    hidden: { x: "-130%", skew: "45deg" },
    show: {
        x: "100%",
        skew: "0deg",
        transition: { ease: "easeOut", duration: 1 },
    },
};

export const sliderContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            ease: "easeOut",
        },
    },
};