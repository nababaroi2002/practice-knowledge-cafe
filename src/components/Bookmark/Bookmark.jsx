import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
  return (
    <div className='flex flex-col bg-white p-5 rounded-lg'>
        <h3 className='text-lg font-semibold'>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark