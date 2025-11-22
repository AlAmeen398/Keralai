import React from 'react'

export default function FullscreenWrapper({ children, className = '', style = {} }) {
	const baseStyle = {
		minHeight: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2rem 0',
		boxSizing: 'border-box'
	}

	return (
		<div className={`fullscreen-wrapper ${className}`} style={{ ...baseStyle, ...style }}>
			{children}
		</div>
	)
}
