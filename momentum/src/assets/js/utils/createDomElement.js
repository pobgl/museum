export default function createDomElement(tag, classNames, child, parent, ...dataAttr) {
  let element = null;

  try {
    element = document.createElement(tag);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }

  if (classNames) element.classList.add(...classNames.split(' '));

  if (child && Array.isArray(child)) {
    child.forEach((childElem) => childElem && element.append(childElem));
  } else if (child && typeof child === 'string') {
    element.innerText = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (dataAttr && dataAttr.length) {
    const attrName = dataAttr[0];
    const attrValue = dataAttr[1];
    const isDataAttr = dataAttr[2];
    if (!isDataAttr) {
      element.setAttribute(attrName, attrValue);
    } else {
      element.dataset[attrName] = attrValue;
    }
  }
  return element;
}
