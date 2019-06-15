import React from 'react'
import PropTypes from 'prop-types'
import TooltipTrigger from 'react-popper-tooltip'
import 'react-popper-tooltip/dist/styles.css'

const Tooltip = ({ children, tooltip, hideArrow, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement,
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container',
        })}
      >
        {!hideArrow && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'tooltip-arrow',
              'data-placement': placement,
            })}
          />
        )}
        {tooltip}
      </div>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger pointer',
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
)

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  hideArrow: PropTypes.bool,
}

export default Tooltip
