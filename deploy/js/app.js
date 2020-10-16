!function(){const t=function(t){this.ctx=t,this.GRID_SIZE=50,this.LINE_NUMBER=9,this.R=.3*this.GRID_SIZE,this.color="#ffffff",this.isWhite=1,this.stonePoses=[],this.init()};t.prototype={init:function(){this.ctx.translate(1,1),this.drawBoard()},drawBoard:function(){const t=this,o=t.GRID_SIZE*(t.LINE_NUMBER-1);let i=0,n=0;t.drawRect(i,n,o,o,"#008833");for(let e=1;e<=t.LINE_NUMBER;e++)t.drawLine(i,0,i,o),i+=t.GRID_SIZE;for(let e=1;e<=t.LINE_NUMBER;e++)t.drawLine(0,n,o,n),n+=t.GRID_SIZE},drawRect:function(t,o,i,n,e){this.ctx.fillStyle=void 0!==e?e:"#000000",this.ctx.fillRect(t,o,i,n)},drawLine:function(t,o,i,n,e,s){this.ctx.strokeStyle=void 0!==e?e:"#000000",this.ctx.lineWidth=void 0!==s?s:1,this.ctx.beginPath(),this.ctx.moveTo(t,o),this.ctx.lineTo(i,n),this.ctx.closePath(),this.ctx.stroke()},startGame:function(){const t=this,o=t.GRID_SIZE*((t.LINE_NUMBER-1)/2),i=t.GRID_SIZE/2;let n,e,s=-1,c=-1,h={r:t.R};function l(l){for(let r=0;r<2;r++){n=o+s*i,e=o+c*i,h.x=n,h.y=e,h.color=l;let r=new window.myOthello.Stone(t.ctx,h);r.drawArc(h),t.stonePoses.push({instance:r,pos:[Math.floor(n/t.GRID_SIZE),Math.floor(e/t.GRID_SIZE)]}),s*=-1,c*=-1}}l("#ffffff"),s*=-1,l("#000000")},getPosOnBoard:function(t,o){return[Math.floor(t/this.GRID_SIZE),Math.floor(o/this.GRID_SIZE)]},putStone:function(t,o){let i=Math.floor(t/this.GRID_SIZE),n=Math.floor(o/this.GRID_SIZE);if(this.checkVacancy(i,n)>0)return;if(!this.checkNeighbor(i,n))return;this.isWhite*=-1,color=this.isWhite>0?"#ffffff":"#000000";let e={x:this.GRID_SIZE*i+this.GRID_SIZE/2,y:this.GRID_SIZE*n+this.GRID_SIZE/2,r:this.R,color:color},s=new window.myOthello.Stone(this.ctx,e);s.drawArc(e),this.stonePoses.push({instance:s,pos:[i,n]})},checkVacancy:function(t,o){return this.stonePoses.filter(function(i){return i.pos[0]===t&&i.pos[1]===o}).length},checkNeighbor:function(t,o){const i=this;let n=!1,e=[[t-1,o],[t-1,o+1],[t,o+1],[t+1,o+1],[t+1,o],[t+1,o-1],[t,o-1],[t-1,o-1]];for(let s=0,c=i.stonePoses.length;s<c;s++){for(let t=0,o=e.length;t<o;t++)if(i.stonePoses[s].pos[0]===e[t][0]&&i.stonePoses[s].pos[1]===e[t][1]){n=!0;break}if(n)break}return n}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.BoardManager=t}(),function(){const t=function(t,o){this.canvas=t,this.color=o.color,this.stones=[],this.init()};t.prototype={init:function(){this.setEvent()},setEvent:function(){},getClickPos:function(){}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Player=t}(),function(){const t=function(t,o){this.ctx=t,this.color=o.color};t.prototype={drawArc:function(t){this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.r,0,2*Math.PI,!0),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.closePath()}},void 0===window.myOthello&&(window.myOthello={}),window.myOthello.Stone=t}(),document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("canvas");if(!t.getContext)return;const o=document.getElementById("wrapper"),i=t.getContext("2d");i.canvas.width=o.clientWidth,i.canvas.height=o.clientHeight;const n=new myOthello.BoardManager(i);n.startGame(),t.addEventListener("click",function(t){n.putStone(t.offsetX,t.offsetY)})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJvYXJkTWFuYWdlci5qcyIsIlBsYXllci5qcyIsIlN0b25lLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbIkJvYXJkTWFuYWdlciIsImN0eCIsInRoaXMiLCJHUklEX1NJWkUiLCJMSU5FX05VTUJFUiIsIlIiLCJjb2xvciIsImlzV2hpdGUiLCJzdG9uZVBvc2VzIiwiaW5pdCIsInByb3RvdHlwZSIsInRyYW5zbGF0ZSIsImRyYXdCb2FyZCIsInNlbGYiLCJmaWVsZFNpemUiLCJ4IiwieSIsImRyYXdSZWN0IiwiaSIsImRyYXdMaW5lIiwieDEiLCJ5MSIsIngyIiwieTIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2UiLCJzdGFydEdhbWUiLCJjZW50ZXIiLCJkaWZmIiwicG9zWCIsInBvc1kiLCJkaXIxIiwiZGlyMiIsImRhdGEiLCJyIiwic2V0Rmlyc3RTdG9uZSIsInN0b25lIiwid2luZG93IiwibXlPdGhlbGxvIiwiU3RvbmUiLCJkcmF3QXJjIiwicHVzaCIsImluc3RhbmNlIiwicG9zIiwiTWF0aCIsImZsb29yIiwiZ2V0UG9zT25Cb2FyZCIsImNsaWNrZWRYIiwiY2xpY2tlZFkiLCJwdXRTdG9uZSIsIm50aEdyaWRYIiwibnRoR3JpZFkiLCJjaGVja1ZhY2FuY3kiLCJjaGVja05laWdoYm9yIiwibnRoWCIsIm50aFkiLCJmaWx0ZXIiLCJ2YWwiLCJsZW5ndGgiLCJoYXNOZWlnaGJvciIsIm5laWdoYm9ycyIsImoiLCJsZW4iLCJQbGF5ZXIiLCJjYW52YXMiLCJzdG9uZXMiLCJzZXRFdmVudCIsImdldENsaWNrUG9zIiwiYXJjIiwiUEkiLCJmaWxsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid3JhcHBlciIsImNsaWVudFdpZHRoIiwi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T0FBQWEsT0FBQUYsRUFBQUcsYUFpQkEsTUFBQUMsRUFBQSxJQUFBekMsVUFBQTlDLGFBQUFDLEdBTUFzRixFQUFBckQsWUFFQXNDLEVBQUFRLGlCQUFBLFFBQUEsU0FBQVEsR0FHQUQsRUFBQTlCLFNBQUErQixFQUFBQyxRQUFBRCxFQUFBRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgQm9hcmRNYW5hZ2VyID0gZnVuY3Rpb24oY3R4KSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuY3R4ID0gY3R4O1xuXG4gICAgICAgIHNlbGYuR1JJRF9TSVpFID0gNTA7XG4gICAgICAgIHNlbGYuTElORV9OVU1CRVIgPSA5O1xuICAgICAgICBzZWxmLlIgPSBzZWxmLkdSSURfU0laRSAqIDAuMztcblxuICAgICAgICBzZWxmLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgICBzZWxmLmlzV2hpdGUgPSAxO1xuXG4gICAgICAgIHNlbGYuc3RvbmVQb3NlcyA9IFtdO1xuXG4gICAgICAgIHNlbGYuaW5pdCgpO1xuICAgIH07XG5cbiAgICBCb2FyZE1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8geD0wLCB5PTDjgaflhYjjga7lpKrjgZXjgYzljYrliIbjgZfmj4/lhpnjgZXjgozjgarjgYTjgZ/jgoHjgIHln7rmupbngrnjgpLjgZrjgonjgZlcbiAgICAgICAgICAgIHNlbGYuY3R4LnRyYW5zbGF0ZSgxLCAxKTtcblxuICAgICAgICAgICAgc2VsZi5kcmF3Qm9hcmQoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGRyYXdCb2FyZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgY29uc3QgZmllbGRTaXplID0gc2VsZi5HUklEX1NJWkUgKiAoc2VsZi5MSU5FX05VTUJFUiAtIDEpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgICAgICBsZXQgeSA9IDA7XG5cbiAgICAgICAgICAgIHNlbGYuZHJhd1JlY3QoeCwgeSwgZmllbGRTaXplLCBmaWVsZFNpemUsICcjMDA4ODMzJyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNlbGYuTElORV9OVU1CRVI7IGkrKykge1xuICAgICAgICAgICAgICAgIHNlbGYuZHJhd0xpbmUoeCwgMCwgeCwgZmllbGRTaXplKTtcbiAgICAgICAgICAgICAgICB4ICs9IHNlbGYuR1JJRF9TSVpFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZi5MSU5FX05VTUJFUjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3TGluZSgwLCB5LCBmaWVsZFNpemUsIHkpO1xuICAgICAgICAgICAgICAgIHkgKz0gc2VsZi5HUklEX1NJWkU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBkcmF3UmVjdDogZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIsIGNvbG9yKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgc2VsZi5jdHguZmlsbFN0eWxlID0gdHlwZW9mIGNvbG9yICE9PSAndW5kZWZpbmVkJyA/IGNvbG9yIDogJyMwMDAwMDAnO1xuICAgICAgICAgICAgc2VsZi5jdHguZmlsbFJlY3QoeDEsIHkxLCB4MiwgeTIpO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhd0xpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyLCBjb2xvciwgd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5zdHJva2VTdHlsZSA9IHR5cGVvZiBjb2xvciAhPT0gJ3VuZGVmaW5lZCcgPyBjb2xvciA6ICcjMDAwMDAwJztcbiAgICAgICAgICAgIHNlbGYuY3R4LmxpbmVXaWR0aCA9IHR5cGVvZiB3aWR0aCAhPT0gJ3VuZGVmaW5lZCcgPyB3aWR0aCA6IDE7XG5cbiAgICAgICAgICAgIHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgc2VsZi5jdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICBzZWxmLmN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5zdHJva2UoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXJ0R2FtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gc2VsZi5HUklEX1NJWkUgKiAoKHNlbGYuTElORV9OVU1CRVIgLSAxKSAvIDIpO1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChzZWxmLkdSSURfU0laRSAvIDIpO1xuICAgICAgICAgICAgbGV0IGRpcjEgPSAtMTtcbiAgICAgICAgICAgIGxldCBkaXIyID0gLTE7XG4gICAgICAgICAgICBsZXQgcG9zWCwgcG9zWTtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHI6IHNlbGYuUlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0Rmlyc3RTdG9uZSgnI2ZmZmZmZicpO1xuICAgICAgICAgICAgZGlyMSAqPSAtMTtcbiAgICAgICAgICAgIHNldEZpcnN0U3RvbmUoJyMwMDAwMDAnKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0Rmlyc3RTdG9uZShjb2xvcikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc1ggPSBjZW50ZXIgKyBkaXIxICogZGlmZjtcbiAgICAgICAgICAgICAgICAgICAgcG9zWSA9IGNlbnRlciArIGRpcjIgKiBkaWZmO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEueCA9IHBvc1g7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEueSA9IHBvc1k7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29sb3IgPSBjb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvbmUgPSBuZXcgd2luZG93Lm15T3RoZWxsby5TdG9uZShzZWxmLmN0eCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b25lLmRyYXdBcmMoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9uZVBvc2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IHN0b25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBbTWF0aC5mbG9vcihwb3NYIC8gc2VsZi5HUklEX1NJWkUpLCBNYXRoLmZsb29yKHBvc1kgLyBzZWxmLkdSSURfU0laRSldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpcjEgKj0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGRpcjIgKj0gLTE7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQb3NPbkJvYXJkOiBmdW5jdGlvbihjbGlja2VkWCwgY2xpY2tlZFkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoY2xpY2tlZFggLyBzZWxmLkdSSURfU0laRSksIE1hdGguZmxvb3IoY2xpY2tlZFkgLyBzZWxmLkdSSURfU0laRSldO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgcHV0U3RvbmU6IGZ1bmN0aW9uKGNsaWNrZWRYLCBjbGlja2VkWSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGxldCBudGhHcmlkWCA9IE1hdGguZmxvb3IoY2xpY2tlZFggLyBzZWxmLkdSSURfU0laRSk7XG4gICAgICAgICAgICBsZXQgbnRoR3JpZFkgPSBNYXRoLmZsb29yKGNsaWNrZWRZIC8gc2VsZi5HUklEX1NJWkUpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5jaGVja1ZhY2FuY3kobnRoR3JpZFgsIG50aEdyaWRZKSA+IDApIHtcbiAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2VsZi5jaGVja05laWdoYm9yKG50aEdyaWRYLCBudGhHcmlkWSkpIHtcbiAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5pc1doaXRlICo9IC0xO1xuICAgICAgICAgICAgY29sb3IgPSBzZWxmLmlzV2hpdGUgPiAwID8gJyNmZmZmZmYnIDogJyMwMDAwMDAnO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB4OiAoc2VsZi5HUklEX1NJWkUgKiBudGhHcmlkWCkgKyAoc2VsZi5HUklEX1NJWkUgLyAyKSxcbiAgICAgICAgICAgICAgICB5OiAoc2VsZi5HUklEX1NJWkUgKiBudGhHcmlkWSkgKyAoc2VsZi5HUklEX1NJWkUgLyAyKSxcbiAgICAgICAgICAgICAgICByOiBzZWxmLlIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgc3RvbmUgPSBuZXcgd2luZG93Lm15T3RoZWxsby5TdG9uZShzZWxmLmN0eCwgZGF0YSk7XG4gICAgICAgICAgICBzdG9uZS5kcmF3QXJjKGRhdGEpO1xuXG4gICAgICAgICAgICBzZWxmLnN0b25lUG9zZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2U6IHN0b25lLFxuICAgICAgICAgICAgICAgIHBvczogW250aEdyaWRYLCBudGhHcmlkWV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2hlY2tWYWNhbmN5OiBmdW5jdGlvbihudGhYLCBudGhZKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHNlbGYuc3RvbmVQb3Nlcy5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5wb3NbMF0gPT09IG50aFggJiYgdmFsLnBvc1sxXSA9PT0gbnRoWTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aDtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGNoZWNrTmVpZ2hib3I6IGZ1bmN0aW9uKG50aFgsIG50aFkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBsZXQgaGFzTmVpZ2hib3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGV0IG5laWdoYm9ycyA9IFtcbiAgICAgICAgICAgICAgICBbbnRoWCAtIDEsIG50aFldLCAgICAgICAvLyDlt6ZcbiAgICAgICAgICAgICAgICBbbnRoWCAtIDEsIG50aFkgKyAxXSwgICAvLyDlt6bkuIpcbiAgICAgICAgICAgICAgICBbbnRoWCwgbnRoWSArIDFdLCAgICAgICAvLyDkuIpcbiAgICAgICAgICAgICAgICBbbnRoWCArIDEsIG50aFkgKyAxXSwgICAvLyDlj7PkuIpcbiAgICAgICAgICAgICAgICBbbnRoWCArIDEsIG50aFldLCAgICAgICAvLyDlj7NcbiAgICAgICAgICAgICAgICBbbnRoWCArIDEsIG50aFkgLSAxXSwgICAvLyDlj7PkuItcbiAgICAgICAgICAgICAgICBbbnRoWCwgbnRoWSAtIDFdLCAgICAgICAvLyDkuItcbiAgICAgICAgICAgICAgICBbbnRoWCAtIDEsIG50aFkgLSAxXSAgICAvLyDlt6bkuItcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBzZWxmLnN0b25lUG9zZXMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gbmVpZ2hib3JzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnN0b25lUG9zZXNbaV0ucG9zWzBdID09PSBuZWlnaGJvcnNbal1bMF0gJiYgc2VsZi5zdG9uZVBvc2VzW2ldLnBvc1sxXSA9PT0gbmVpZ2hib3JzW2pdWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNOZWlnaGJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGFzTmVpZ2hib3I7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Lm15T3RoZWxsbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93Lm15T3RoZWxsbyA9IHt9O1xuICAgIH1cbiAgICB3aW5kb3cubXlPdGhlbGxvLkJvYXJkTWFuYWdlciA9IEJvYXJkTWFuYWdlcjtcblxufSgpKTsiLCI7KGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgUGxheWVyID0gZnVuY3Rpb24oY2FudmFzLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHNlbGYuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIHNlbGYuY29sb3IgPSBkYXRhLmNvbG9yO1xuICAgICAgICBzZWxmLnN0b25lcyA9IFtdO1xuXG4gICAgICAgIHNlbGYuaW5pdCgpO1xuICAgIH07XG5cbiAgICBQbGF5ZXIucHJvdG90eXBlID0ge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNlbGYuc2V0RXZlbnQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRFdmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgLy8gc2VsZi5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZS5vZmZzZXRYKTtcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0Q2xpY2tQb3M6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cubXlPdGhlbGxvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cubXlPdGhlbGxvID0ge307XG4gICAgfVxuICAgIHdpbmRvdy5teU90aGVsbG8uUGxheWVyID0gUGxheWVyO1xuXG59KCkpOyIsIjsoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBTdG9uZSA9IGZ1bmN0aW9uKGN0eCwgZGF0YSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmN0eCA9IGN0eDtcbiAgICAgICAgc2VsZi5jb2xvciA9IGRhdGEuY29sb3I7XG5cbiAgICB9O1xuXG4gICAgU3RvbmUucHJvdG90eXBlID0ge1xuXG4gICAgICAgIGRyYXdBcmM6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZWxmLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHNlbGYuY3R4LmFyYyhkYXRhLngsIGRhdGEueSwgZGF0YS5yLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICAgICAgICBzZWxmLmN0eC5maWxsU3R5bGUgPSBkYXRhLmNvbG9yO1xuICAgICAgICAgICAgc2VsZi5jdHguZmlsbCgpO1xuICAgICAgICAgICAgc2VsZi5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cubXlPdGhlbGxvID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cubXlPdGhlbGxvID0ge307XG4gICAgfVxuICAgIHdpbmRvdy5teU90aGVsbG8uU3RvbmUgPSBTdG9uZTtcblxufSgpKTsiLCI7KGZ1bmN0aW9uKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcblxuICAgICAgICBpZiAoIWNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3cmFwcGVyLmNsaWVudFdpZHRoO1xuICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IHdyYXBwZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGxldCBwbGF5ZXJEYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgYm9hcmQgPSBuZXcgbXlPdGhlbGxvLkJvYXJkTWFuYWdlcihjdHgpO1xuXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBwbGF5ZXJEYXRhLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICBwbGF5ZXJEYXRhW2ldLmluc3RhbmNlID0gIG5ldyBteU90aGVsbG8uUGxheWVyKGNhbnZhcywgcGxheWVyRGF0YVtpXS5kYXRhKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGJvYXJkLnN0YXJ0R2FtZSgpO1xuXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm9hcmQuZ2V0UG9zT25Cb2FyZChlLm9mZnNldFgsIGUub2Zmc2V0WSkpO1xuICAgICAgICAgICAgYm9hcmQucHV0U3RvbmUoZS5vZmZzZXRYLCBlLm9mZnNldFkpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIC8vIOODleOCo+ODvOODq+ODieOCkuabuOOBj++8iDh4OO+8iVxuICAgICAgICAvLyDlkITjg57jgrnnm67jga7jgqjjg6rjgqLmg4XloLHjgpLkv53mjIHvvIhzdGFydFgsIHN0YXJ0WSwgZW5kWCwgZW5kWe+8iVxuICAgICAgICAvLyAgICAgIOOCr+ODquODg+OCr+OBl+OBn+S9jee9ruOBqGNhbnZhc+S4iuOBruS9jee9ruOBruWkieaPm+OBjOW/heimge+8n1xuICAgICAgICAvLyDjg5fjg6zjgqTjg6Tjg7znmb3jg7vpu5LjgpLjgrvjg4Pjg4hcbiAgICAgICAgLy8gICAgICDjg5Xjg6njgrDjgavjgZnjgovvvJ9cbiAgICAgICAgLy8g5Lit5aSu44Gr55m96buSMuOBk+OBmuOBpOOCu+ODg+ODiFxuXG4gICAgICAgIC8vIOWQhOODl+ODrOOCpOODpOODvOOBrue9ruOBhOOBn+efs+OCkuS/neaMgeOBmeOCi+mFjeWIl1xuICAgICAgICAvL1xuXG5cblxuICAgIH0pO1xuXG59KCkpO1xuXG4vKipcbiAqIC8vIFRPRE8g6LOq5ZWPXG4gKlxuICogMS5cbiDjgIzliKTlrprjgZnjgovjgI3jgajjgYTjgYboi7Hoqp7jga/kvZXjgpLkvb/jgaPjgabjgb7jgZnjgYvvvJ9cblxuIGZpbmQ/IGp1ZGdlPyBkZWNpZGU/XG5cblxuIDIuXG4gY2hyb21l44GuZGV244OE44O844Or44Gn44Kk44Oz44K544K/44Oz44K544Gr5YWl44Gj44Gm44GE44KLdOOBqOOBr+OBquOCk+OBruaEj+WRs+OAgeeVpe+8iO+8n++8ieOBp+OBmeOBi++8n+OCpOODs+OCueOCv+ODs+OCueOCkuODreOCsOOBq+WHuuOBmeOBqHTjgajjgarjgovvvJ9cbiBib2FyZC5zdGFydEdhbWXjga7mnIDlvozjgadjb25zb2xlLmxvZyhzZWxmLnN0b25lUG9zZXMpO+OBmeOCi+OBqOeiuuiqjeOBp+OBjeOCi1xuXG4gKi9cbiJdfQ==