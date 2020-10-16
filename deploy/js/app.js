!function(){const t=function(t){this.ctx=t,this.GRID_SIZE=50,this.LINE_NUMBER=9,this.R=.3*this.GRID_SIZE,this.unclikablePoses=[],this.init()};t.prototype={init:function(){this.ctx.translate(1,1),this.drawBoard()},drawBoard:function(){const t=this,i=t.GRID_SIZE*(t.LINE_NUMBER-1);let o=0,n=0;t.drawRect(o,n,i,i,"#008833");for(let e=1;e<=t.LINE_NUMBER;e++)t.drawLine(o,0,o,i),o+=t.GRID_SIZE;for(let e=1;e<=t.LINE_NUMBER;e++)t.drawLine(0,n,i,n),n+=t.GRID_SIZE},drawRect:function(t,i,o,n,e){this.ctx.fillStyle=void 0!==e?e:"#000000",this.ctx.fillRect(t,i,o,n)},drawLine:function(t,i,o,n,e,c){this.ctx.strokeStyle=void 0!==e?e:"#000000",this.ctx.lineWidth=void 0!==c?c:1,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(o,n),this.ctx.closePath(),this.ctx.stroke()},startGame:function(){const t=this,i=t.GRID_SIZE*((t.LINE_NUMBER-1)/2),o=t.GRID_SIZE/2;let n,e,c=-1,s=-1,l={r:t.R};function h(h){for(let r=0;r<2;r++){n=i+c*o,e=i+s*o,l.x=n,l.y=e,l.color=h,new window.myOthello.Piece(t.ctx,l).drawArc(l),c*=-1,s*=-1}}h("#ffffff"),c*=-1,h("#000000")},getPosOnBoard:function(t,i){return[Math.floor(t/this.GRID_SIZE),Math.floor(i/this.GRID_SIZE)]}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.BoardManager=t}(),function(){const t=function(t,i){this.ctx=t,this.color=i.color};t.prototype={drawArc:function(t){this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI,!0),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.closePath()}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Piece=t}(),function(){const t=function(t,i){this.canvas=t,this.color=i.color,this.stones=[],this.init()};t.prototype={init:function(){this.setEvent()},setEvent:function(){},getClickPos:function(){}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Player=t}(),document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("canvas");if(!t.getContext)return;const i=document.getElementById("wrapper"),o=t.getContext("2d");o.canvas.width=i.clientWidth,o.canvas.height=i.clientHeight,new myOthello.BoardManager(o).startGame()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvYXJkTWFuYWdlci5qcyIsIlBpZWNlLmpzIiwiUGxheWVyLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTWFuYWdlciIsImN0eCIsInRoaXMiLCJHUklEX1NJWkUiLCJMSU5FX05VTUJFUiIsIlIiLCJ1bmNsaWthYmxlUG9zZXMiLCJpbml0IiwicHJvdG90eXBlIiwidHJhbnNsYXRlIiwiZHJhd0JvYXJkIiwic2VsZiIsImZpZWxkU2l6ZSIsIngiLCJ5IiwiZHJhd1JlY3QiLCJpIiwiZHJhd0xpbmUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ3aWR0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlIiwic3RhcnRHYW1lIiwiY2VudGVyIiwiZGlmZiIsInBvc1giLCJwb3NZIiwiZGlyMSIsImRpcjIiLCJkYXRhIiwiciIsInNldEZpcnN0UGllY2UiLCJ3aW5kb3ciLCJteU90aGVsbG8iLCJQaWVjZSIsImRyYXdBcmMiLCJnZXRQb3NPbkJvYXJkIiwiY2xpY2tlZFgiLCJjbGlja2VkWSIsIk1hdGgiLCJmbG9vciIsImFyYyIsIlBJIiwiZmlsbCIsIlBsYXllciIsImNhbnZhcyIsInN0b25lcyIsInNldEV2ZW50IiwiZ2V0Q2xpY2tQb3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJ3cmFwcGVyIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiXSwibWFwcGluZ3MiOiJDQUFBLFdBRUEsTUFBQUEsRUFBQSxTQUFBQyxHQUNBQyxLQUVBRCxJQUFBQSxFQUZBQyxLQUlBQyxVQUFBLEdBSkFELEtBS0FFLFlBQUEsRUFMQUYsS0FNQUcsRUFBQSxHQU5BSCxLQU1BQyxVQU5BRCxLQVFBSSxtQkFSQUosS0FVQUssUUFHQVAs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LE1BSkFwQixLQUtBdUQsVUFMQXZELEtBT0FLLFFBR0FnRCxFQUFBL0MsV0FFQUQsS0FBQSxXQUNBTCxLQUVBd0QsWUFHQUEsU0FBQSxhQVNBQyxZQUFBLG1CQVFBLElBQUFoQixPQUFBQyxZQUNBRCxPQUFBQyxjQUVBRCxPQUFBQyxVQUFBVyxPQUFBQSxFQXpDQSxHQ0VBSyxTQUFBQyxpQkFBQSxtQkFBQSxXQUVBLE1BQUFMLEVBQUFJLFNBQUFFLGVBQUEsVUFFQSxJQUFBTixFQUFBTyxXQUNBLE9BR0EsTUFBQUMsRUFBQUosU0FBQUUsZUFBQSxXQUNBN0QsRUFBQXVELEVBQUFPLFdBQUEsTUFDQTlELEVBQUF1RCxPQUFBL0IsTUFBQXVDLEVBQUFDLFlBQ0FoRSxFQUFBdUQsT0FBQVUsT0FBQUYsRUFBQUcsYUFFQSxJQUFBdkIsVUFBQTVDLGFBQUFDLEdBRUFnQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgQm9hcmRNYW5hZ2VyID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuY3R4ID0gY3R4O1xuXG4gICAgICAgIHNlbGYuR1JJRF9TSVpFID0gNTA7XG4gICAgICAgIHNlbGYuTElORV9OVU1CRVIgPSA5O1xuICAgICAgICBzZWxmLlIgPSBzZWxmLkdSSURfU0laRSAqIDAuMztcblxuICAgICAgICBzZWxmLnVuY2xpa2FibGVQb3NlcyA9IFtdO1xuXG4gICAgICAgIHNlbGYuaW5pdCgpO1xuICAgIH07XG5cbiAgICBCb2FyZE1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8geD0wLCB5PTDjgaflhYjjga7lpKrjgZXjgYzljYrliIbjgZfmj4/lhpnjgZXjgozjgarjgYTjgZ/jgoHjgIHln7rmupbngrnjgpLjgZrjgonjgZlcbiAgICAgICAgICAgIHNlbGYuY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgICAgICAgICAgc2VsZi5kcmF3Qm9hcmQoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdCb2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgY29uc3QgZmllbGRTaXplID0gc2VsZi5HUklEX1NJWkUgKiAoc2VsZi5MSU5FX05VTUJFUiAtIDEpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG5cbiAgICAgICAgICAgIHNlbGYuZHJhd1JlY3QoeCwgeSwgZmllbGRTaXplLCBmaWVsZFNpemUsICcjMDA4ODMzJyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNlbGYuTElORV9OVU1CRVI7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd0xpbmUoeCwgMCwgeCwgZmllbGRTaXplKTtcbiAgICAgICAgICAgICAgICB4ICs9IHNlbGYuR1JJRF9TSVpFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZi5MSU5FX05VTUJFUjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3TGluZSgwLCB5LCBmaWVsZFNpemUsIHkpO1xuICAgICAgICAgICAgICAgIHkgKz0gc2VsZi5HUklEX1NJWkU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UmVjdDogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIGNvbG9yKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jdHguZmlsbFN0eWxlID0gdHlwZW9mIGNvbG9yICE9PSAndW5kZWZpbmVkJyA/IGNvbG9yIDogJyMwMDAwMDAnO1xuICAgICAgICAgICAgc2VsZi5jdHguZmlsbFJlY3QoeDEsIHkxLCB4MiwgeTIpO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhd0xpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCBjb2xvciwgd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5zdHJva2VTdHlsZSA9IHR5cGVvZiBjb2xvciAhPT0gJ3VuZGVmaW5lZCcgPyBjb2xvciA6ICcjMDAwMDAwJztcbiAgICAgICAgICAgIHNlbGYuY3R4LmxpbmVXaWR0aCA9IHR5cGVvZiB3aWR0aCAhPT0gJ3VuZGVmaW5lZCcgPyB3aWR0aCA6IDE7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgc2VsZi5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICBzZWxmLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5zdHJva2UoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXJ0R2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gc2VsZi5HUklEX1NJWkUgKiAoKHNlbGYuTElORV9OVU1CRVIgLSAxKSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChzZWxmLkdSSURfU0laRSAvIDIpO1xuICAgICAgICAgICAgbGV0IGRpcjEgPSAtMTtcbiAgICAgICAgICAgIGxldCBkaXIyID0gLTE7XG4gICAgICAgICAgICBsZXQgcG9zWCwgcG9zWTtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHI6IHNlbGYuUlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0Rmlyc3RQaWVjZSgnI2ZmZmZmZicpO1xuICAgICAgICAgICAgZGlyMSAqPSAtMTtcbiAgICAgICAgICAgIHNldEZpcnN0UGllY2UoJyMwMDAwMDAnKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0Rmlyc3RQaWVjZShjb2xvcikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc1ggPSBjZW50ZXIgKyBkaXIxICogZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgcG9zWSA9IGNlbnRlciArIGRpcjIgKiBkaWZmO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEueCA9IHBvc1g7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEueSA9IHBvc1k7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29sb3IgPSBjb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcGllY2UgPSBuZXcgd2luZG93Lm15T3RoZWxsby5QaWVjZShzZWxmLmN0eCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHBpZWNlLmRyYXdBcmMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGlyMSAqPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgZGlyMiAqPSAtMTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldFBvc09uQm9hcmQ6IGZ1bmN0aW9uKGNsaWNrZWRYLCBjbGlja2VkWSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihjbGlja2VkWCAvIHNlbGYuR1JJRF9TSVpFKSwgTWF0aC5mbG9vcihjbGlja2VkWSAvIHNlbGYuR1JJRF9TSVpFKV07XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLkJvYXJkTWFuYWdlciA9IEJvYXJkTWFuYWdlcjtcblxufSgpKTsiLCI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgUGllY2UgPSBmdW5jdGlvbihjdHgsIGRhdGEpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgc2VsZi5jdHggPSBjdHg7XG4gICAgICAgIHNlbGYuY29sb3IgPSBkYXRhLmNvbG9yO1xuXG4gICAgfTtcblxuICAgIFBpZWNlLnByb3RvdHlwZSA9IHtcblxuICAgICAgICBkcmF3QXJjOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBzZWxmLmN0eC5hcmMoZGF0YS54LCBkYXRhLnksIGRhdGEuciwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgICAgICAgICAgc2VsZi5jdHguZmlsbFN0eWxlID0gZGF0YS5jb2xvcjtcbiAgICAgICAgICAgIHNlbGYuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLlBpZWNlID0gUGllY2U7XG5cbn0oKSk7IiwiOyhmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IFBsYXllciA9IGZ1bmN0aW9uKGNhbnZhcywgZGF0YSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmNhbnZhcyA9IGNhbnZhcztcblxuICAgICAgICBzZWxmLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgc2VsZi5zdG9uZXMgPSBbXTtcblxuICAgICAgICBzZWxmLmluaXQoKTtcbiAgICB9O1xuXG4gICAgUGxheWVyLnByb3RvdHlwZSA9IHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLnNldEV2ZW50KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0RXZlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIHNlbGYuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUub2Zmc2V0WCk7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGdldENsaWNrUG9zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLlBsYXllciA9IFBsYXllcjtcblxufSgpKTsiLCI7KGZ1bmN0aW9uKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICBpZiAoIWNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3cmFwcGVyLmNsaWVudFdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGJvYXJkID0gbmV3IG15T3RoZWxsby5Cb2FyZE1hbmFnZXIoY3R4KTtcblxuICAgICAgICBib2FyZC5zdGFydEdhbWUoKTtcblxuXG4gICAgICAgIC8vIOODleOCo+ODvOODq+ODieOCkuabuOOBj++8iDh4OO+8iVxuICAgICAgICAvLyDlkITjg57jgrnnm67jga7jgqjjg6rjgqLmg4XloLHjgpLkv53mjIHvvIhzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWe+8iVxuICAgICAgICAvLyAgICAgIOOCr+ODquODg+OCr+OBl+OBn+S9jee9ruOBqGNhbnZhc+S4iuOBruS9jee9ruOBruWkieaPm+OBjOW/heimge+8n1xuICAgICAgICAvLyDjg5fjg6zjgqTjg6Tjg7znmb3jg7vpu5LjgpLjgrvjg4Pjg4hcbiAgICAgICAgLy8gICAgICDjg5Xjg6njgrDjgavjgZnjgovvvJ9cbiAgICAgICAgLy8g5Lit5aSu44Gr55m96buSMuOBk+OBmuOBpOOCu+ODg+ODiFxuXG4gICAgICAgIC8vIOWQhOODl+ODrOOCpOODpOODvOOBrue9ruOBhOOBn+efs+OCkuS/neaMgeOBmeOCi+mFjeWIl1xuICAgICAgICAvL1xuXG5cblxuICAgIH0pO1xuXG59KCkpOyJdfQ==