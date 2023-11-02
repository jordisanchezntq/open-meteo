import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonItem, IonCol, IonGrid, IonRow, IonRefresher, IonRefresherContent, IonImg, IonSpinner } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Element from '../styled/Element';
import { useGetProductsQuery } from '../store/apis/productApi'

const Products: React.FC = () => {
  const [ temp, setTemp ] = useState([]);
  const [ refreshTrigger, setRefreshTrigger ] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector( (state: any) => state.products.loading);
  const temperature = useSelector( (state: any) => state.weather.temperature);
  const location = useSelector( (state: any) => state.location.city);

  const {
    data: products = [],
    isLoading,

  } = useGetProductsQuery();

  const handleRefresh = (e: any) => {
    setTimeout(()=> {
      e.detail.complete();
      setRefreshTrigger(true)
    }, 1500)
  }
  
  return (
    <IonPage>
      <Header />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size='12'>
              <IonItem>
                <IonText style={{ padding: '10px 0px'}}>
                  <p>
                    En segunda tab, se muestra en formato galeria diferentes datos. Aqui no se trabaja el post, sino al GET y como mostrar y ordenar diferentes elementos.
                  </p>
                </IonText>
              </IonItem>
            </IonCol>
          </IonRow>
        {isLoading 
        ? ( <div className='ion-text-center'>
              <IonSpinner className='ion-text-center' />
            </div>)
        : products.length > 0 ? (
          <IonRow className='ion-padding'>
            {products.map((product: any) => (
              <IonCol size="6" key={product.id}>
                <Element>
                  <h4 style={{ flex: 1}}>{product.title}</h4>
                  <IonImg src={product.image} style={{ flex: 2, objectFit: 'cover', maxHeight: '220px'}}/>
                </Element>
              </IonCol>
            ))}
          </IonRow>
        ) : null}
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Products;

