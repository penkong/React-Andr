import { compose } from "redux";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsLoaded } from "../../redux/shop/shopSelector";
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';



const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
})

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
) (CollectionPage);