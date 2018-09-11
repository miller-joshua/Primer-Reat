/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from '../Link'
import {render, renderClasses} from '../utils/testing'
import {COMMON} from '../system-props'

describe('Link', () => {
  it('is a system component', () => {
    expect(Link.systemComponent).toEqual(true)
  })

  it('implements common system props', () => {
    expect(Link).toImplementSystemProps(COMMON)
  })

  it('respects the "scheme" prop', () => {
    expect(renderClasses(<Link scheme="gray" />)).toContain('link-gray')
    expect(renderClasses(<Link scheme="gray-dark" />)).toContain('link-gray-dark')
  })

  it('respects the "muted" prop', () => {
    expect(renderClasses(<Link muted />)).toContain('muted-link')
  })

  xit('respects the "nounderline" prop', () => {
    expect(render(<Link nounderline />)).toHaveStyleRule('text-decoration', 'none')
  })

  it('passes href down to link element', () => {
    expect(render(<Link href="https://github.com" />)).toMatchSnapshot()
  })

  it('renders without any props', () => {
    expect(render(<Link />)).toMatchSnapshot()
  })
})
