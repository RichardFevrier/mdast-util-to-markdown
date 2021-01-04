module.exports = checkListItemIndent

function checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'original'

  if (style === 1 || style === '1') {
    return 'one'
  }

  if (style !== 'original' && style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}
