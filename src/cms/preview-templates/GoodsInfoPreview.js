import React from 'react'
import PropTypes from 'prop-types'
import { GoodsInfoTemplate } from '../../templates/goods-info'

const GoodsInfoPreview = ({ entry, widgetFor }) => (
  <GoodsInfoTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

GoodsInfoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GoodsInfoPreview
