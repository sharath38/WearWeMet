import React from 'react'
import MenuItem from '../menu-item/Menu-item'
import './Directory.style.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { SelectDirectorySection } from '../../redux/Directory/Directory-selector'

const MenuDirectory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: SelectDirectorySection,
})

export default connect(mapStateToProps)(MenuDirectory)
