import { compose } from "redux";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from "../../redux/shop/shopSelector";
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';



const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching
})

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
) (CollectionsOverview);