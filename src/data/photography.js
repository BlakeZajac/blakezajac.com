// @todo - Sanity
const importAll = (context) => context.keys().map(context);

const landscapeImages = importAll(require.context('@/src/img/photography/', false, /blake-zajac-gallery-landscape-\d+\.(webp|jpg|png)$/));
const portraitImages = importAll(require.context('@/src/img/photography/', false, /blake-zajac-gallery-portrait-\d+\.(webp|jpg|png)$/));

const photographyItems = [
    ...landscapeImages.map((image, index) => ({
        src: image,
        alt: '',
        orientation: 'landscape',
    })),
    ...portraitImages.map((image, index) => ({
        src: image,
        alt: '',
        orientation: 'portrait',
    }))
]

export default photographyItems;
