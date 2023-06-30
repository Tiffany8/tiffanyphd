import NavigationHeader from 'components/NavigationHeader'

const BlogPage: () => JSX.Element = (): JSX.Element => {
  return (
    <>
      <NavigationHeader />
      <main>
        <div className="flex h-screen flex-col items-center px-4">
          <h1 className="mb-10 font-satisfy text-8xl">Blog</h1>
          <p className="font-roborto text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            auctor elit sed vulputate mi. Ut faucibus pulvinar elementum integer
            enim neque volutpat ac tincidunt. Ac feugiat sed lectus vestibulum
            mattis ullamcorper velit sed. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus. Luctus venenatis lectus magna fringilla
            urna porttitor rhoncus dolor purus. Nulla posuere sollicitudin
            aliquam ultrices sagittis orci a. Aliquet eget sit amet tellus cras.
            Tortor dignissim convallis aenean et tortor. Sed risus pretium quam
            vulputate dignissim. Lectus vestibulum mattis ullamcorper velit sed
            ullamcorper.
          </p>
        </div>
      </main>
    </>
  )
}

export default BlogPage
