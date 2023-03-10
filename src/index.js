class Message {
  constructor() {
    this._prefixCls = "i-message";
    this._default = {
      top: "20vh",
      duration: 3,
      single: false,
    };
    this._messageWrapperId = this._createMessageWrapperId();
  }

  info() {
    return this._showMessage("info", arguments);
  }

  success() {
    return this._showMessage("success", arguments);
  }

  warning() {
    return this._showMessage("warning", arguments);
  }

  error() {
    return this._showMessage("error", arguments);
  }

  loading() {
    return this._showMessage("loading", arguments);
  }

  update({ key, content }) {
    const messageWrapper = document.getElementById(this._messageWrapperId);
    const thisMessage = (() => {
      let tar = undefined;
      messageWrapper.childNodes.forEach((item) => {
        if (item.getAttribute("data-key") === key) {
          tar = item;
        }
      });
      return tar;
    })();
    const thisContent = thisMessage.querySelector(
      `.${this._prefixCls}-content`
    );
    thisContent.innerHTML = content;
  }

  destroy() {
    const messageWrapper = document.getElementById(this._messageWrapperId);
    if (messageWrapper) {
      document.body.removeChild(messageWrapper);
    }
    this._resetDefault();
  }

  /**
   * @description: Restore defaults
   */
  _resetDefault() {
    this._default = {
      top: "20vh",
      duration: 3,
      single: false,
    };
  }

  /**
   * @description: Render function
   * @param {String} type
   * @param {Object | String} options
   */
  _showMessage(type, args) {
    let options = { ...args[1] };
    // string, e.g $message.info("This is a message")
    if (typeof args[0] === "string") {
      options.content = args[0];
    }
    // object, e.g $message.info({ content: "message", closable: true })
    if (args.length === 1 && typeof args[0] === "object") {
      options = args[0];
    }

    return this._render({
      key: options.key,
      content: options.content,
      duration: options.duration,
      type,
      onClose: options.onClose,
      closable: options.closable,
    });
  }

  /**
   * Generate uuid
   * Globally Unique Identifier
   * @returns {string}
   */
  _createGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  /**
   * @description: get icon
   * @param {String} type
   * @return {String} DOM HTML
   */
  _getIcon(type = "info") {
    const icons = {
      info: `<svg class="icon-info" style="color:#2db7f5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>`,
      success: `<svg class="icon-success" style="color:#19be6b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
       </svg>`,
      warning: `<svg class="icon-warning" style="color:#ff9900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>`,
      error: `<svg class="icon-error" style="color:#ed4014" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
       </svg>`,
      loading: `<svg  class="icon-loading" style="color:#2db7f5" xmlns="http://www.w3.org/2000/svg" class="loading" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
       </svg>`,
    };
    return icons[type];
  }

  /**
   * @description: new close btn
   * @param {Element} messageBoxDOM
   */
  _addClosBtn(messageBoxDOM, remove, removeTimer) {
    const closeSvg = `<svg class="close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>`;
    const domparser = new DOMParser();
    const closBtn = domparser.parseFromString(closeSvg, "text/html").body
      .childNodes[0];
    closBtn.onclick = () => {
      removeTimer && clearTimeout(removeTimer);
      remove();
    };
    messageBoxDOM
      .querySelector(`.${this._prefixCls}-close`)
      .appendChild(closBtn);
  }

  /**
   * @description: Get messageWrapperId
   * @return {String} messageWrapperId
   */
  _createMessageWrapperId() {
    const wrapperId = `messageBox-${Math.random()}`;
    return document.getElementById(wrapperId)
      ? this._createMessageWrapperId()
      : wrapperId;
  }

  /**
   * @description: Create element wrapper
   * @return {Element} dom object
   */
  _createMessageWrapper() {
    return (
      document.getElementById(this._messageWrapperId) ||
      (() => {
        const messageWrapper = document.createElement("div");
        messageWrapper.classList.add("next-message");
        messageWrapper.id = this._messageWrapperId;
        messageWrapper.style.top = isNaN(Number(this._default.top))
          ? this._default.top || "20%"
          : `${this._default.top}px`;
        document.body.appendChild(messageWrapper);
        return messageWrapper;
      })()
    );
  }

  /**
   * @description: create message dom
   * @param {String} type
   * @param {String} content
   * @return {Element} dom
   */
  _createMessageBox({ key, type, content }) {
    // message-box dom
    const messageBoxDOM = document.createElement("div");
    messageBoxDOM.className = `${this._prefixCls}-box animate__animated animate__fadeInDown`;
    messageBoxDOM.setAttribute("data-key", key);

    // // message dom
    // const messageDom = document.createElement("div");
    // messageDom.className = `${this._prefixCls}`;

    // message-icon dom
    const messageIconDom = document.createElement("div");
    messageIconDom.className = `${this._prefixCls}-icon`;
    messageIconDom.innerHTML = this._getIcon(type);

    // message-content dom
    const messageContentDom = document.createElement("div");
    messageContentDom.className = `${this._prefixCls}-content`;
    messageContentDom.innerHTML = content;

    // message-close dom
    const messageCloseDom = document.createElement("div");
    messageCloseDom.className = `${this._prefixCls}-close`;

    // append
    messageBoxDOM.append(messageIconDom);
    messageBoxDOM.append(messageContentDom);
    messageBoxDOM.append(messageCloseDom);

    return messageBoxDOM;
  }

  /**
   * @description: remove
   * @param {Element} messageWrapper
   * @param {Element} messageBoxDOM
   * @param {Number} duration
   */
  _removeMessageBox(messageWrapper, messageBoxDOM, onClose) {
    messageBoxDOM.classList.remove("animate__fadeInDown");
    messageBoxDOM.classList.add("animate__fadeOutDown");
    setTimeout(() => {
      !this._default.single && messageWrapper.removeChild(messageBoxDOM);
      onClose();
    }, 400);
  }

  /**
   * @description: drag message box
   * @param {Element} messageBoxDOM
   */
  _dragMessageBox({ messageBoxDOM }) {
    const dragBox = messageBoxDOM;
    // onStart
    dragBox.onmousedown = (downEvent) => {
      if (downEvent.button !== 0) {
        // Left mouse button, 0:left, 2:right
        return false;
      }

      // The distance between the box and the page when the mouse is pressed
      let originBoxX = dragBox.offsetLeft;
      let originBoxY = dragBox.offsetTop;

      // The distance between the mouse and the page when the mouse is pressed
      let mouseX = downEvent.pageX;
      let mouseY = downEvent.pageY;

      // onMove
      document.onmousemove = (moveEvent) => {
        // Distance of mouse movement = (the position after the mouse moves) - (the position when the mouse is pressed)
        let distanceX = moveEvent.pageX - mouseX;
        let distanceY = moveEvent.pageY - mouseY;

        // box'left & top
        let left = originBoxX + distanceX;
        let top = originBoxY + distanceY;

        if (left <= 0) {
          left = 0;
        } else if (
          left >=
          document.documentElement.clientWidth - dragBox.offsetWidth
        ) {
          left = document.documentElement.clientWidth - dragBox.offsetWidth;
        }

        if (top <= 0) {
          top = 0;
        } else if (
          top >=
          document.documentElement.clientHeight - dragBox.offsetHeight
        ) {
          top = document.documentElement.clientHeight - dragBox.offsetHeight;
        }

        // Reassign box
        // dragBox.style.width = width + "px";
        dragBox.style.position = "absolute";
        dragBox.style.left = left + "px";
        dragBox.style.top = top + "px";
      };

      // onOver
      document.onmouseup = () => {
        // Unbind event
        document.onmouseup = null;
        document.onmousemove = null;
      };
    };
  }

  /**
   * @description: render message
   * @param {String} content
   * @param {Number} duration
   * @param {String} type
   */
  _render({
    key = this._createGuid(),
    content = "",
    duration = this._default.duration,
    type = "info",
    onClose = () => {},
    closable = true,
  }) {
    const messageWrapper = this._createMessageWrapper();
    if (this._default.single) {
      messageWrapper.innerHTML = "";
    }

    // message dom
    const messageBoxDOM = this._createMessageBox({ key, type, content });

    // append
    messageWrapper.appendChild(messageBoxDOM);

    // remove
    const remove = () => {
      this._removeMessageBox(messageWrapper, messageBoxDOM, onClose);
    };
    let removeTimer = null;
    if (duration !== 0) {
      removeTimer = setTimeout(remove, duration * 1000);
    }

    // close
    closable && this._addClosBtn(messageBoxDOM, remove, removeTimer);

    // drag
    this._dragMessageBox({ messageBoxDOM });
  }
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = new Message();
} else {
  window.$message = new Message();
}
