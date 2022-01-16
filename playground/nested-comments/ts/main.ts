export type CommentType = {
  id: string;
  content: string;
  children?: CommentType[];
  parentId?: string;
};

export function reshape(items: CommentType[]) {
  //
}

export function reshapeComments(items: any[]) {
  let comments = [...items];
  const shouldBeRemove: string[] = [];

  for (let i = 0; i < comments.length; ++i) {
    let parent = comments[i];
    for (let j = 0; j < comments.length; ++j) {
      let child = comments[j];
      if (child.parentId === parent.id) {
        //reshapeComments(comments, child.id);
        if (parent.children) {
          parent.children.push(child);
        } else {
          parent.children = [child];
        }
        comments.splice(j, 1);
      }
    }
  }

  comments = comments.filter(
    (item: CommentType) => !shouldBeRemove.includes(item.id)
  );

  return comments;
}

export function reshapeChildren(
  items: CommentType[],
  parent: CommentType
): CommentType[] {
  let children: CommentType[] = [];

  // reshapeChildren => p= 2 // child => 2.1 2.1.1
  // reshapeChildren => p= 2.1 // child = 2.1.1 // children = 2.1.1
  // reshapeChildren => p= 2.1.1 => children=[] ;
  // child = 2.1
  for (let i = 0; i < items.length; ++i) {
    const child = items[i];
    console.log("what is child", child);
    if (child.parentId === parent.id) {
      children = reshapeChildren(items, child);
      if (parent?.children && parent?.children?.length > 0) {
        parent.children.push(child);
      } else {
        parent.children = [child];
      }
      let removed = items.splice(i, 1);
    }
  }

  return children;
}

export function findAndReshape(comments: CommentType[]) {
  for (let i = 0; i < comments.length; ++i) {
    let children = reshapeChildren(comments, comments[i]);
    console.log(JSON.stringify(children, null, 2));
  }

  console.log(JSON.stringify(comments, null, 2));
  return comments;
}

export function logRecursively(comments: CommentType[]) {
  for (let i = 0; i < comments.length; ++i) {
    const comment = comments[i];
    console.log(comment);
    if (comment.children) {
      logRecursively(comment.children);
    }
  }
}