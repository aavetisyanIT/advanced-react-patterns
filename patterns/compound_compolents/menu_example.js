//bad code:
function BadApp() {
  return (
    <Menu
      buttonContents={
        <>
          Actions <span aria-hidden>▾</span>
        </>
      }
      items={[
        {contents: 'Download', onSelect: () => alert('Download')},
        {contents: 'Create a Copy', onSelect: () => alert('Create a Copy')},
        {contents: 'Delete', onSelect: () => alert('Delete')},
      ]}
    />
  )
}

//good code:
function GoodApp() {
  return (
    <Menu>
      <MenuButton>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={() => alert('Download')}>Download</MenuItem>
        <MenuItem onSelect={() => alert('Copy')}>Create a Copy</MenuItem>
        <MenuItem onSelect={() => alert('Delete')}>Delete</MenuItem>
      </MenuList>
    </Menu>
  )
}
