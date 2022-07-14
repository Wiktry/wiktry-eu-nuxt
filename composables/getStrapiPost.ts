import { useStoresSettings } from '@/stores/storesSettings';

const getStrapiPost = async (id: number, type = 'showcases' ) => {
  const settings = useStoresSettings();
  const { findOne } = useStrapi4();
  
  if (settings.language === 'swedish') {
    return await findOne(type, id, { populate: 'post', locale: 'sv' });
  } else if (settings.language === 'english') {
    return await findOne(type, id, { populate: 'post', locale: 'en' } );
  }
}

export default getStrapiPost;