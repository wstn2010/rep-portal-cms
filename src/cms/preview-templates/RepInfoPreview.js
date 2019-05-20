import React from 'react'
import PropTypes from 'prop-types'
import { RepInfoTemplate } from '../../templates/rep-info'

const RepInfoPreview = ({ entry, widgetFor }) => (
  <RepInfoTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

RepInfoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RepInfoPreview
